import PropTypes from "prop-types";

const MyComponent = ({caption, placeholder, color}) => {
  return (
    <div>
      <strong style={{ color }}>{caption}</strong>
      <input type="text" placeholder={placeholder} style={{ marginLeft: '8px', borderRadius: '4px' }}/>
    </div>
  );
}

MyComponent.propTypes = {
   caption: PropTypes.string,
   placeholder: PropTypes.string,
   color: PropTypes.string
}

export default MyComponent;