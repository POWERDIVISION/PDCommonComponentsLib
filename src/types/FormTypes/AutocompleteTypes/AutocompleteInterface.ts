export type AutocompleteType = 'standard' | 'outlined' | 'text'
export type AutocompleteSize = 'small' | 'medium'
export type AutocompleteItem = {
  id: string
  value: string | number
}
export interface AutocompleteProps {
  modelValue: AutocompleteItem[] | []
  type: AutocompleteType
  items: AutocompleteItem[]
  single?: boolean
  size?: AutocompleteSize
  placeholder?: string
  label?: string
  disable?: boolean
}
