import { useState, useEffect, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import * as Y from 'yjs'
import { HocuspocusProvider } from '@hocuspocus/provider'
import { IndexeddbPersistence } from 'y-indexeddb'
import { FileText, Wifi, WifiOff, RefreshCcw } from 'lucide-react'

// Hàm ngẫu nhiên chọn màu sắc cho con trỏ của mỗi người dùng
const getRandomColor = () => {
  const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Ngẫu nhiên đặt tên người dùng ẩn danh
const getRandomName = () => {
  const names = ['Anonymous Fox', 'Mysterious Owl', 'Curious Cat', 'Clever Dog', 'Brave Lion', 'Smart Dolphin'];
  return names[Math.floor(Math.random() * names.length)];
}

function App() {
  const [status, setStatus] = useState('connecting')
  const [currentUser] = useState({ name: getRandomName(), color: getRandomColor() })
  
  // Khởi tạo Y.Doc và Provider đồng bộ 1 lần duy nhất bằng useState() (lazy initialization)
  const [ydoc] = useState(() => new Y.Doc())
  const [provider] = useState(() => new HocuspocusProvider({
    url: 'ws://127.0.0.1:1234',
    name: 'tiptap-collaborative-room',
    document: ydoc,
  }))

  useEffect(() => {
    // Cài đặt IndexedDB để lưu trữ offline
    const persistence = new IndexeddbPersistence('tiptap-offline-doc', ydoc)
    persistence.on('synced', () => {
      console.log('IndexedDB is synced')
    })

    // Lắng nghe sự kiện để cập nhật UI
    const handleConnect = () => setStatus('connected');
    const handleDisconnect = () => setStatus('disconnected');

    provider.on('connect', handleConnect);
    provider.on('disconnect', handleDisconnect);
    provider.on('close', handleDisconnect);

    return () => {
      provider.off('connect', handleConnect);
      provider.off('disconnect', handleDisconnect);
      provider.off('close', handleDisconnect);
      // Giữ lại không destroy ydoc/provider trong StrictMode để tránh lỗi "doc is undefined" ở lần mount sau 
      // Do useState giữ nguyên instance gốc giữa 2 lần render của StrictMode.
      // provider.destroy()
      // persistence.destroy()
      // ydoc.destroy()
    }
  }, [provider, ydoc])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: currentUser,
      }),
    ],
    content: '<p>Xin chào! Hãy bắt đầu chỉnh sửa văn bản...</p>',
    autofocus: 'end',
  })

  // Chọn icon phù hợp với status
  const StatusIcon = status === 'connected' ? Wifi : (status === 'connecting' ? RefreshCcw : WifiOff)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          <FileText size={28} color="var(--primary-color)" />
          Antigravity Editor
        </h1>
        
        <div className="connection-status">
          <div className="status-indicator" data-status={status}></div>
          <span style={{ textTransform: 'capitalize' }}>{status}</span>
          <StatusIcon size={16} color={
            status === 'connected' ? 'var(--success-color)' : 
            (status === 'connecting' ? 'var(--warning-color)' : 'var(--error-color)')
          } className={status === 'connecting' ? 'status-indicator' : ''} />
        </div>
      </header>

      {/* Tiptap Editor Content */}
      <EditorContent editor={editor} />
      
    </div>
  )
}

export default App
