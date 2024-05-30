import { Provider } from "react-redux"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import store from "./store"

import Button from "@mui/material/Button"
import Theme from "./utils/Theme"
import { Typography } from "@mui/material"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Theme>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  <Button variant="contained">Hello world</Button>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Theme>
      </Router>
    </Provider>
  )
}

function Home() {
  return <Typography>Home</Typography>
}

function About() {
  return <Typography>About</Typography>
}

export default App
