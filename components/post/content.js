/*
  Show rendered Markdown content
  Depending on the type of post, add the appropriate classes
 */
export default ({ type, content }) =>
  type === 'Note' ? (
    <p className="e-content p-name content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </p>
  ) : (
    <p className="e-content content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </p>
  )
