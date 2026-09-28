const url = "https://ablo-ingles.omyraucy.workers.dev/auth"

const isAuth = sessionStorage.getItem('isAuth')

if (!isAuth) {
    const jwt = localStorage.getItem('jwt')

    if (jwt) {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jwt })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.ok) {
                    sessionStorage.setItem('isAuth', true)
                } else {
                    sessionStorage.removeItem('isAuth')
                    localStorage.removeItem('jwt')
                }
            })
    }

}