import './App.css';
import { Stage, Layer, Circle, Line } from 'react-konva';

function App() {
  const parents = [
    {
      name: 'Node 1',
      descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
      childs: [
        {
          name: 'Node 1.1',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
          childs: [
            {
              name: 'Node 1.1.1',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.1.2',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.1.3',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
              childs: [
                {
                  name: 'Node 1.1.3.1',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.2',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.3',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.4',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.5',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
              ],
            },
            {
              name: 'Node 1.1.4',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
          ],
        },
        {
          name: 'Node 1.2',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
        {
          name: 'Node 1.3',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
        {
          name: 'Node 1.4',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
          childs: [
            {
              name: 'Node 1.4.1',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.4.2',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
              childs: [
                {
                  name: 'Node 1.4.2.1',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.4.2.2',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.4.2.3',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                  childs: [
                    {
                      name: 'Node 1.4.2.3.1',
                      descriptions:
                        'At vero eos et accusamus et iusto odio dignissimos',
                    },
                    {
                      name: 'Node 1.4.2.3.2',
                      descriptions:
                        'At vero eos et accusamus et iusto odio dignissimos',
                    },
                  ],
                },
                {
                  name: 'Node 1.4.2.4',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
              ],
            },
            {
              name: 'Node 1.4.3',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
          ],
        },
        {
          name: 'Node 1.5',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
      ],
    },
  ];

  const tree = (node, x, y, space) => {

    if(!node.childs) {
      return <Circle x={x} y={y} radius={10} fill="green" />
    }
    else {
      const len = node.childs.length;

      return (
        <>
          <Circle x={x} y={y} radius={10} fill="green" />
          {node.childs.map((item, index) => {
            if(index < len / 2) {
              return (
                <div key={index}>
                  <Line x={x} y={y} points={[0, 0, - (len / 2 - index) * space, 100]} stroke="black" />
                  {tree(item, x - (len / 2 - index) * space, y + 100, space - 10)}
                </div>
              )
            }
            else {
              return (
                <div key={index}>
                  <Line x={x} y={y} points={[0, 0, (index - len / 2) * space, 100]} stroke="black" />
                  {tree(item, x + (index - len / 2) * space, y + 100, space - 10)}
                </div>
              )
            }
          })}
        </>
      )
    }
  }


  return (
    <div>
      <Stage width={1512} height={1024}>
        <Layer>
          {tree(parents.at(0), 512, 100, 100)}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
