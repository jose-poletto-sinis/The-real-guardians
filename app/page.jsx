'use client';
import { useState } from 'react';

export default function Page() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const add = () => {
    const t = text.trim();
    if (!t) return;
    setTasks([...tasks, { text: t, done: false }]);
    setText('');
  };
  const toggle = (i) => setTasks(tasks.map((t, j) => j === i ? { ...t, done: !t.done } : t));
  const remove = (i) => setTasks(tasks.filter((_, j) => j !== i));
  const pending = tasks.filter(t => !t.done).length;

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: 480,
        padding: 32,
      }}>
        <h1 style={{ color: '#333', marginBottom: 8, fontSize: 28 }}>Mis Tareas</h1>
        <p style={{ color: '#888', fontSize: 14, marginBottom: 24 }}>Organizá tu día</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && add()}
            placeholder="¿Qué necesitás hacer?"
            style={{
              flex: 1, padding: '12px 16px',
              border: '2px solid #e5e7eb', borderRadius: 8,
              fontSize: 15, outline: 'none',
            }}
          />
          <button onClick={add} style={{
            background: '#667eea', color: '#fff', border: 'none',
            padding: '12px 20px', borderRadius: 8, fontSize: 15, cursor: 'pointer',
          }}>Agregar</button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#bbb', padding: '32px 0', fontStyle: 'italic' }}>
              No hay tareas todavía ✨
            </p>
          ) : tasks.map((task, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: 12, borderBottom: '1px solid #f0f0f0',
            }}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggle(i)}
                style={{ width: 20, height: 20, cursor: 'pointer', accentColor: '#667eea' }}
              />
              <span style={{
                flex: 1,
                color: task.done ? '#aaa' : '#333',
                textDecoration: task.done ? 'line-through' : 'none',
              }}>{task.text}</span>
              <button onClick={() => remove(i)} style={{
                background: 'transparent', color: '#ef4444',
                border: 'none', padding: '4px 8px', fontSize: 18, cursor: 'pointer',
              }}>×</button>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 20, fontSize: 13, color: '#888', textAlign: 'center' }}>
          {pending} tareas pendientes
        </p>
      </div>
    </div>
  );
}
