# grafana-writejson-plugin

- Plugin sample for saving data with Grafana 
- Reason
  - I just want a page-direction that displays data from InfluxDB, like how many Errors that I got? which type on which server?
  - For example, once I click the link/button of Fit, Grafana will return the difenite page with 15 counts of panels( each panel for one server) that show FIt data.

    | Type  | Count | Link / Button |
    | :---: | :---: | :-----------: |
    |   Fit  |  15   |  link_of_fit  |
    |  UCE  |  32   |  link_of_uce  |
    | Other |  127  | link_of other |

- How
  - Grafana uses JSON file to display dashboards with queries saved on panels.
  -  According to the Type and Count, I can write queries to my own JSON file on the backend.
  - Grafana will read the specific JSON file to display data just what I want.
- This repository is just one simple example of saving data.
- Based on:
  - Grafana 9.5.2
  - node.js

### Steps

- **Step 0**: Clone this plugin project into your path to grafana plugins

  - Usually on `/path/to/grafana/data/plugins`

- **Step 1**: Modify this repository

  - `src/components/Simplepanel.tsx`，edit `dataToSave` and function `fetch`，set your own Route 
  - `backend/backend.js`，edit function `app.use` and `saveDataToJsonFile`，allow your requests and set where to save your data.

- **Step 2**: Install necessary node_modules and build

  ```bash
  yarn install
  yarn dev
  ```

  - Without any Errors, restart Grafana server to load this plugin. 

- **Step 3**: Check it on your Browser

  - Add a new Visualization of Pagesdirection Plugin
  - Complete what you need

### Screenshot

<div align="center">
  <img src="https://github.com/XiXiangkun/images/blob/master/writejson.png?raw=true">
</div>
