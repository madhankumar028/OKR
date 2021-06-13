import React from 'react';

import { Accordion } from './components/Accordion/Accordion';

import { HTTPClient } from './api';

import './styles/index.scss';

function App() {

  const [parentObjective, setParentObjective] = React.useState([]);
  const [childObjective, setChildObjective] = React.useState([]);

  const formatOKRList = (OKRList) => {
    setParentObjective(OKRList.filter(OKRItem => !OKRItem.parent_objective_id));
    setChildObjective(OKRList.filter(OKRItem => OKRItem.parent_objective_id));
  };

  const fetchOKRList = async () => {
    const { data } = await HTTPClient(`/database/db.json`);
    formatOKRList(data);
  };

  React.useEffect(() => {
    fetchOKRList();
  }, []);

  return (
    <main className="okr__app--wrapper">
      <header className="header">
        <p data-testid="okr__app--test">OKR APP</p>
      </header>
      <section>
        {
          parentObjective.length > 0 && (
            parentObjective.map((objective, index) => (
              <Accordion title={`${index + 1}. ${objective.title}`} shouldOpen={index === 0} key={objective.id}>
                <ol className="okr__list--wrapper">
                  {
                    childObjective.filter(item => item.parent_objective_id === objective.id)
                    .map(item => (
                      <li type="a" className="heading-sm-m" key={item.id}>{item.title}</li>
                    ))
                  }
                </ol>
              </Accordion>
            ))
          )
        }
      </section>
    </main>
  );
}

export default App;
