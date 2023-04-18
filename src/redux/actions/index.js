export const GET_PROFILE = "GET_PROFILE"
export const GET_EXPS = "GET_EXPS"

export const getProfile = (profile) => {
    return {
        type: GET_PROFILE,
        payload: profile
    }
}

export const getExps = (exp) => {
    return {
        type: GET_EXPS,
        payload: exp
    }
}



export const fetchProfiles = async () => {

    return async (dispatch, getState) => {

        try {
            console.log("prova")
            let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
                method: "GET",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ0MDE4NmE4NzAwMTQzODY3YjYiLCJpYXQiOjE2ODE3MTYyODksImV4cCI6MTY4MjkyNTg4OX0.nnZIC70nMSqy-7TYOvkaTZCODXPuczqf06p1rKtRqPE"
                },
            })
            if (resp.ok) {
                let profile = await resp.json()
                console.log(profile)
                dispatch(getProfile(profile))
            } else {
                alert('errore nella chiamata')
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const fetchExp = async (id) => {

    return async (dispatch, getState) => {

        try {
            let resp = await fetch(`striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ0MDE4NmE4NzAwMTQzODY3YjYiLCJpYXQiOjE2ODE3MTYyODksImV4cCI6MTY4MjkyNTg4OX0.nnZIC70nMSqy-7TYOvkaTZCODXPuczqf06p1rKtRqPE"
                }
            })
            if (resp.ok) {
                let exp = await resp.json()
                console.log(exp)
                dispatch(getExps(exp))
            } else {
                alert('errore nella chiamata')
            }
        } catch (error) {
            console.log(error)
        }
    }
}