import Profile from "./components/Profile"

function App() {

  return (
    <div className="app">
      <Profile
        avatar="https://pbs.twimg.com/profile_images/1014152048529506306/gye1jkLJ_400x400.jpg"
        name="Ricardo Hollanda Filho"
        bio="Software Engineer"
        email="ricardolch.filho@gmail.com"
        phone="+5585988484499"
        githubUrl="https://github.com/kadin88/"
        linkedinUrl="https://www.linkedin.com/in/ricardo-luiz-costa-hollanda-filho-449a9052/"
        twitterUrl="https://twitter.com/hollandaricardo"
      />
    </div>
  )
}

export default App
