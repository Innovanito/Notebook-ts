import NoteForm from './NoteForm'
import { NoteData } from './App'
import { Tag } from './App'
import { useNote } from './NoteLayout'

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}
const EditNote = ({ onSubmit, onAddTag, availableTags}: EditNoteProps) => {
  const note = useNote()
  
  return (
    <>
      <h1 className='mb-4'>EditNote</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={data => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default EditNote