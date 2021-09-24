import axios from 'axios'

const PERSONA_API_BASE = "/api/persona"

export const state = () => ({
  personaList: [],
  selectedPersonaId: null
})

export const mutations = {
  setPersonaList(state, personaList) {
    state.personaList = personaList
  },
  selectPersona(state, personaId) {
    state.selectedPersonaId = personaId
  }
}

export const getters = {
  personaMap(state) {
    const personaMap = {}
    state.personaList.forEach(p => personaMap[p.persona] = p)
    return personaMap
  },
  selectedPersona(state, getters) {
    if (!state.selectedPersonaId) {
      return null
    }
    return getters.personaMap[state.selectedPersonaId]
  }
}

export const actions = {

  async loadPersonaList({commit}) {
    console.log('loading personas...')
    const {data} = await axios.get(PERSONA_API_BASE)
    commit('setPersonaList', data)
    commit('selectPersona', data[0].persona)
  },
}
