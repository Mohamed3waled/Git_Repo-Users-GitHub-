let Create_Search = document.querySelector('.Search_Button')
let Input_Search = document.querySelector('.Input_Search')

Input_Search.focus()

Create_Search.addEventListener('click', () => {
    if (Input_Search.value !== '') {
        fetch(`https://api.github.com/users/${Input_Search.value.trim()}/repos`).then((response) => {
            let Data = response.json()
            return Data
        }).then((Full_Data) => {
            if (Full_Data.message === 'Not Found') {
                document.querySelector('.display_Repos').innerHTML = `<span class="Not_Found"> User Not_Found</span>`
            }
            else if (Full_Data.length <= 0) {
                document.querySelector('.display_Repos').innerHTML = `<span class="Not_Found"> User Found But Not Found Repos</span>`
            }
            else {
                // Sapn Login User
                //Span Login User
                let Container = ''
                Full_Data.forEach((element) => {
                    Container += `
                <div class="Repo">
                    <h4>${element.name}</h4>
                    <div class="puttons">
                        <a href="https://mohamed3waled.github.io/${element.name}/" target = "_blank" class="View">View</a>
                        <a href="https://github.com/Mohamed3waled/${element.name}/archive/refs/heads/main.zip" class="Download">Download</a>
                    </div>
                </div>
                `
                })
                document.querySelector('.display_Repos').innerHTML = Container
            }
            if (Full_Data.length > 0) {
                document.querySelector('.Parent_Repos').innerHTML = `<span> Login_User : ${Full_Data[0].owner.login}</span>`
            }
            else {
                document.querySelector('.Parent_Repos').innerHTML = `<span></span>`
            }
        }).catch(()=> {
            alert('Check Your InterNet')
        })
        Input_Search.value = ''
        Input_Search.focus()
    }
})






