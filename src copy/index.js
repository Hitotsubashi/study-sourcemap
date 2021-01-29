import createHeading from './heading.js'
const createLink =require('./link.js')

const heading = createHeading()
document.body.append(heading)

const link=createLink()
document.body.append(link)