import "babel/polyfill"
import docReady from "doc-ready"

// import { startKuchikomiFormIfNeed } from "../kuchikomi/src/kuchikomiForm"

import React from "react"
import ReactDom from "react-dom"
import Test from "./Test.jsx"


// クチコミ回答フォームの起動
docReady( () => {
  console.log("SIMPLE")
  let container = document.getElementById("answer-form-app")
  ReactDom.render(<Test/>, container)
  // startKuchikomiFormIfNeed()
})