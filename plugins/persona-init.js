
export default async (ctx, inject) => {
  await ctx.store.dispatch('persona/loadPersonaList')
}
