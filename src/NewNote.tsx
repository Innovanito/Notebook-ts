import NoteForm from './NoteForm'
import { NoteData } from './App'
import { Tag } from './App'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}
const NewNote = ({ onSubmit, onAddTag, availableTags}: NewNoteProps) => {
  return (
    <>
      <div className='mb-4'>NewNote</div>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default NewNote