import ImageSpec from './specs/ImageSpec';

export interface OverlayOptions {
  // classname applied to the overlay element
  className: string;
  // style applied to overlay element, or null to prevent styles
  style: {};
}

export interface ResizeOptions {
  // class name applied to the resize handles
  handleClassName: string;
  // style applied to resize handles, or null to prevent styles
  handleStyle: {};
}

export interface AlignOptions {
  // the name of the attribute for an element that has its alignment changed
  attribute: string;
  // the aligner does the actual alignment switch
  aligner: {
    // whether or not the aligner should handle the actual alignment properties
    applyStyle: boolean;
  };
  // icons used for alignment
  icons: {
    left: string;
    center: string;
    right: string;
  };
  // the toolbar so users can change alignments
  toolbar: {
    // whether or not users can deselect an alignment. it's up to you to set the initial alignment
    allowDeselect: boolean;
    // class name applied to the root toolbar element
    mainClassName: string;
    // style applied to root toolbar element, or null to prevent styles
    mainStyle;
    // class name applied to each button in the toolbar
    buttonClassName: string;
    /* whether or not to add the selected style to the buttons.
    they'll always get the is-selected class */
    addButtonSelectStyle: boolean;
    // style applied to buttons, or null to prevent styles
    buttonStyle;
    // style applied to the svgs in the buttons
    svgStyle;
  };
}

export interface Options {
  // the BlotSpecs supported
  specs: any;
  overlay: OverlayOptions;
  align: AlignOptions;
  resize: ResizeOptions;
}

const DefaultOptions: Options = {
  specs: [
    ImageSpec,
  ],
  overlay: {
    className: 'blot-formatter__overlay',
    style: {
      position: 'absolute',
      boxSizing: 'border-box',
      border: '1px dashed #444',
    },
  },
  align: {
    attribute: 'data-align',
    aligner: {
      applyStyle: true,
    },
    icons: {
      left: `
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
        </svg>
      `,
      center: `
        <svg viewbox="0 0 18 18">
           <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
        </svg>
      `,
      right: `
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
        </svg>
      `,
    },
    toolbar: {
      allowDeselect: true,
      mainClassName: 'blot-formatter__toolbar',
      mainStyle: {
        position: 'absolute',
        top: '-12px',
        right: '0',
        left: '0',
        height: '0',
        minWidth: '100px',
        font: '12px/1.0 Arial, Helvetica, sans-serif',
        textAlign: 'center',
        color: '#333',
        boxSizing: 'border-box',
        cursor: 'default',
        zIndex: '1',
      },
      buttonClassName: 'blot-formatter__toolbar-button',
      addButtonSelectStyle: true,
      buttonStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        border: '1px solid #999',
        verticalAlign: 'middle',
      },
      svgStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        border: '1px solid #999',
        verticalAlign: 'middle',
      },
    },
  },
  resize: {
    handleClassName: 'blot-formatter__resize-handle',
    handleStyle: {
      position: 'absolute',
      height: '12px',
      width: '12px',
      backgroundColor: 'white',
      border: '1px solid #777',
      boxSizing: 'border-box',
      opacity: '0.80',
    },
  },
};

export default DefaultOptions;
