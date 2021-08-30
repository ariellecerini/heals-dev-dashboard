import axios from 'axios'

const PERSONA_API_BASE = "/api/persona"

export const state = () => ({
  personaList: [],
  selectedPersonaId: null
})



export const actions = {

  async loadPersonaList() {
    console.log('loading personas...')
    const res = await axios.get(PERSONA_API_BASE)
    console.log('res', res)
  },
}
