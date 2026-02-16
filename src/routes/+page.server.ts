export const load = async (a) => {
    return {
        fromPageServer: {
            Obj: JSON.parse(JSON.stringify(a)),
            from: "+page.server.ts"
        }
    }
}
