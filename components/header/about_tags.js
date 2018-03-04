export default () => (
  <div className="tags">
    <div>
      {[
        'achtsamkeit',
        'angst',
        'bücher',
        'depressionen',
        'geschichten',
        'hochsensibilität',
        'kindsein',
        'musik',
        'melancholie',
        'suche',
        'sucht',
        'tagträume',
        'verständnis',
        'videospiele',
        'zufriedenheit',
        'zweifel'
      ].map(t => (
        <span className="tag" key={t}>
          <span className="hash">#</span>
          {t}
          <span>&nbsp;</span>
        </span>
      ))}
    </div>
    <style jsx>{`
      .tag {
        display: inline-block;
        margin-right: 5px;
        color: #333;
      }

      .tag .hash {
        color: #888;
      }
    `}</style>
  </div>
)
