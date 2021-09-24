
import axios from 'axios'

const KBQA_API_BASE = "/api/kbqa"
const ENTITY_RESOLVER_BASE = "/api/entity_resolver"

export const state = () => ({
  query: '',
  expandedQuery: '',
  recommendations: []
})

export const mutations = {
  setQuery(state, query) {
    state.query = query
  },
  setExpandedQuery(state, expQuery) {
    state.expandedQuery = expQuery
  },
  setRecommendations(state, recommendations) {
    state.recommendations = recommendations
  }
}

export const actions = {
  async queryForRecommendations({state, rootState, rootGetters, commit}) {

    const entityRes = await axios.request({
      url: `${ENTITY_RESOLVER_BASE}/resolve`,
      method: 'get',
      params: {
        query: state.query
      }
    })

    const filteredEntities = entityRes.data.tags
        .filter((e) => e.confidence >= 0.9)
        // KBQA won't accept entities with confidence < 0.95
        .map((e) => ({...e, confidence: 1}));


    const personaId = rootState.persona.selectedPersonaId
    const kbqaRes = await axios.request({
      url: `${KBQA_API_BASE}/kbqa`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        intent: "constraint",
        output: "N/A (HEALS dev dashboard)",
        question: `${personaId}:${state.query}`,
        entities: filteredEntities
      }
    })

    const {answer_list, query} = kbqaRes.data
    commit('setExpandedQuery', query)
    commit('setRecommendations', answer_list)
  }
}

