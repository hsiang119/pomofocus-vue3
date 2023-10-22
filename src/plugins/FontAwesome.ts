/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export function initializeFontAwesome() {
    /* add icons to the library */
    library.add(faUserSecret, faGoogle, faCheckCircle, faXmarkCircle, faUser, faUserCheck, faArrowRightFromBracket, faGear, faChartLine)
}

export { FontAwesomeIcon }
