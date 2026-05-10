// Tadiwanashe Chigeza
// u23734176 

//file used to do the connection 
export const useStrapi = () => {
    const config = useRuntimeConfig() // use run time configurations 

    const find = async (endpoint:string) => {
        return await $fetch(`${config.public.strapiUrl}/api/${endpoint}`) // Use a fetch to get the REST API from CMS(sTRAPI )

        //THOUGH FOR :
        // find('blogs?populate=*') =  http://localhost:1337/api/blogs?populate=*
    }
    return{
        find //output the function called find 
    }
}