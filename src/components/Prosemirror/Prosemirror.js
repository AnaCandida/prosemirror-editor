
import React, { useEffect } from 'react';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema, DOMParser } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from 'prosemirror-example-setup';
import './Prosemirror.css';

const ProseMirrorEditor = ({ content }) => {
  useEffect(() => {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
      marks: schema.spec.marks,
    });

    const editorView = new EditorView(document.querySelector('#editor'), {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(content),
        plugins: exampleSetup({ schema: mySchema }),
      }),
    });

    return () => {
      // Limpeza quando o componente for desmontado, se necessário
      editorView.destroy();
    };
  }, [content]);

  return <div id='editor' />;
};

export default ProseMirrorEditor;
