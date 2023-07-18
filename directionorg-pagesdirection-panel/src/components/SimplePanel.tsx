import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { Button, useStyles2 } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = useStyles2(getStyles);
  const handleSaveData = async() => {
  	const dataToSave = { name: 'Scott', age: '26' };
	try {
	  const response = await fetch('http://192.168.33.79:4000/api/plugins/directionorg-pagesdirection-panel/save-data', {
	  	method: 'POST',
	  	headers: {
		  'Content-Type': 'application/json',
	  	},
	    body: JSON.stringify(dataToSave),
		});
	  if (response.ok) {
	  	console.log('Data saved successfully');
	  } else {
	  	console.error('Error saving data');
	  }
	} catch(error) {
	  console.error(error);
	}
  };
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
	  <Button onClick={handleSaveData}>Save Data to JSON</Button>
    </div>
  );
};
