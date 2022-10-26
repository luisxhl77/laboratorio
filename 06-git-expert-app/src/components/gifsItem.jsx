import PropTypes from "prop-types";

export const GifsItem = ({title, url}) => {
  return (
    <div className="card">
        <h4>{title}</h4>
        <img src={url} alt={title} />
    </div>
  )
}

GifsItem.propTypes = {
  
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired

}
