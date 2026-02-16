export const load = async (a) => {
    return {
        fromLayoutServer: {
            Obj: JSON.parse(JSON.stringify(a)),
            from: "+layout.server.ts"
        }
    }
}
