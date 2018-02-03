import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default ({ icon, color, size = 'md' }) => (
  <span className="icon">
    <FontAwesomeIcon icon={icon} size={size} />

    <style jsx>{`
      .icon {
        color: ${color};
        margin-right: 5px;
      }
    `}</style>
  </span>
)
