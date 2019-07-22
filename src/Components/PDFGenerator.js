import React, { createRef, useState } from 'react'
import ReactToPdf from 'react-to-pdf'
import PropTypes from 'prop-types'

const ref = createRef()

function PDFGenerator({ disabled, options, btnclass, filename, btntext, onBeforeCreatePDF, onAfterCreatePDF, component }) {
  const [isVisible, setIsVisible] = useState(0)

  return (
    <div style={{maxWidth: '800px'}}>
      <ReactToPdf
        targetRef={ref}
        filename={`${filename}.pdf`}
        options={options}
      >
        {({ toPdf }) => (
          <button
            className={`btn btn-${btnclass}`}
            disabled={disabled}
            onClick={() => {
              onBeforeCreatePDF()
              setIsVisible(1)
              setTimeout(() => {
                toPdf()
                onAfterCreatePDF()
                setIsVisible(0)
              }, 0)
            }}
          >{btntext}</button>
        )}
      </ReactToPdf>
      <div
        ref={ref}
        style={{opacity: isVisible}}
      >
        {component}
      </div>
    </div>
  )
}

PDFGenerator.defaultProps = {
  btnclass: 'primary',
  disabled: false,
  options: {}
}

PDFGenerator.propTypes = {
  disabled: PropTypes.bool,
  btnclass: PropTypes.string,
  options: PropTypes.object,
  btntext: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  onBeforeCreatePDF: PropTypes.func.isRequired,
  onAfterCreatePDF: PropTypes.func.isRequired,
  component: PropTypes.node.isRequired,
}

export default PDFGenerator

