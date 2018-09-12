import Link from 'next/link'
import {connect} from 'react-redux'

/*import Counter from './counter'
import Clock from './clock'*/
import Tile from './tile'

function Page ({error, lastUpdate, light, linkTo, NavigateTo, placeholderData, title}) {
  let totalapps = placeholderData.length;
  let jsonParsed =placeholderData;
  return (
    <div>
      <h1>
        {title}
      </h1>
      
      <Tile apps={jsonParsed} totalapps={totalapps} />
      {error &&
        <p style={{color: 'red'}}>
          Error: {error.message}
        </p>}
    </div>
  )
}

export default connect(state => state)(Page)
