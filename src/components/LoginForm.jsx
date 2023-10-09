
export default function LoginForm() {

  return (
    <div>
        <form method="post">
            <input type="text" name="user" id="user" placeholder="user" />
            <input type="password" name="password" id="password" placeholder="password"/>
            <button>Submit</button>
        </form>
    </div>
  )
}
