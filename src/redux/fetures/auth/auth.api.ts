import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder) =>(
        {
            login:builder.mutation({
                query:(userInfo)=>({
                    url:'/auth/login',
                    method:'POST',
                    body:userInfo
                })
            }),
            registration:builder.mutation({
                query:(userInfo)=>({
                    url:'/auth/signup',
                    method:'POST',
                    body:userInfo
                })
            }),
            getMe:builder.query({
                query:()=>({
                    url:'/user/get-me',
                    method:'GET',
                   
                })
            })
        }
        
    )
    
})

export const {useLoginMutation,useRegistrationMutation,useGetMeQuery} = authApi