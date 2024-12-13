import { Routes, Route } from "react-router-dom"

import { Notes } from "../pages/Notes"
import { Dashboard } from "../pages/Dashboard"
import { NotFound } from "../pages/NotFound"
import { NewNote } from "../pages/NewNote"
import { PreviewNote } from "../pages/PreviewNote"

export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/new-note" element={<NewNote />} />
        <Route path="/preview-note" element={<PreviewNote />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
