export function layout(title, content){
return``
}

export function loginUI(){
    return layout('LogIn', `
    <h1>ID登入</h1>
    <form action="/" method="post">
    <p><input type="text" placeholder="employee" name="員工姓名"></p>
    <p><input type="password" placeholder="ID" name="ID"></p>
    <p><input type="submit" value="Login"></p>
    </form>
    ` 
    )
}