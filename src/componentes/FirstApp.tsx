import PropTypes from 'prop-types';

export const FirstApp = ({ title }: any) => {

  // console.log(props);
  
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      {/* <p>{ subTitle }</p>
      <p>{ name }</p> */}
    </>
  )
}


// FirstApp.propTypes = {
//   title: PropTypes.string.isRequired,
//   subTitle: PropTypes.string,
// }

// FirstApp.defaultProps = {
//   name: 'Benji Martinez',
//   subTitle: 'No hay subtítulo',
//   // title: 'No hay título',
// }
