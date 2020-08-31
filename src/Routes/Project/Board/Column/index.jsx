import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';

import {
  getProjectColumns,
  moveTask,
} from '../../../../Redux/actions/projectActions';

import Board from './Board';

const Columns = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectColumns(projectId));
  }, [dispatch]);
  const columns = useSelector((store) => store.project.columns);

  const handleDragEnd = ({ destination, source }) => {
    console.log('from', source);
    console.log('to', destination);
    if (!destination) {
      console.log('Not drapped in droppable');
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log('Dropped in same place');
      return;
    }

    const itemCopy = { ...columns[source.droppableId].tasks[source.index] };
    const prev = { ...columns };

    prev[source.droppableId].tasks.splice(source.index, 1);

    prev[destination.droppableId].tasks.splice(destination.index, 0, itemCopy);

    const values = {
      previousColumn: source.droppableId,
      movingColumn: destination.droppableId,
      movingTask: itemCopy._id,
      project: projectId,
    };
    dispatch(moveTask(values));
    console.log(values);
  };

  return (
    <div
      style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(columns, (data, key) => {
          return (
            <div key={key} style={{ width: '30%' }}>
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      style={{
                        padding: '10px 10px 0 10px',
                        width: '100%',
                        backgroundColor: 'grey',
                        borderRadius: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {data.tasks.map((el, index) => {
                        return (
                          <Draggable
                            key={el._id}
                            index={index}
                            draggableId={el._id}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: 'none',
                                    padding: 16,
                                    margin: '0 0 8px 0',
                                    minHeight: '50px',
                                    backgroundColor: snapshot.isDragging
                                      ? '#263B4A'
                                      : '#456C86',
                                    color: 'white',
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {el.taskname}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Columns;
