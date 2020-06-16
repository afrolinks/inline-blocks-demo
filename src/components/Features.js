import React from 'react';
import {
  BlocksControls,
  InlineBlocks,
  InlineText,
  InlineTextarea,
} from 'react-tinacms-inline';
import '../styles/features.css';

export function FeaturesList({ index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      insetControls={true}
    >
      <InlineBlocks
        name="features"
        blocks={FEATURE_BLOCKS}
        direction="row"
        className="feature-list"
      />
    </BlocksControls>
  );
}

export const features_list_template = {
  label: 'Feature List',
  defaultItem: {
    _template: 'features',
    features: [
      {
        _template: 'feature',
        heading: 'heading 1',
        supporting_copy: 'supporting copy',
      },
      {
        _template: 'feature',
        heading: 'heading 2',
        supporting_copy: 'supporting copy',
      },
      {
        _template: 'feature',
        heading: 'heading 3',
        supporting_copy: 'supporting copy',
      },
    ],
  },
  fields: [],
};

function Feature({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }}>
      <div className="feature">
        <h3>
          <InlineText name="heading" focusRing={false} />
        </h3>
        <p>
          <InlineTextarea name="supporting_copy" focusRing={false} />
        </p>
      </div>
    </BlocksControls>
  );
}

const feature_template = {
  label: 'Feature',
  defaultItem: {
    _template: 'feature',
    heading: 'Marie Skłodowska Curie',
    supporting_copy:
      'Rich in mystery muse about vastness is bearable only through love Ut enim ad minima veniam at the edge of forever are creatures of the cosmos. ',
  },
  fields: [],
};

const FEATURE_BLOCKS = {
  feature: {
    Component: Feature,
    template: feature_template,
  },
};
