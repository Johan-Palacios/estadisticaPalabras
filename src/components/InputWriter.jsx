import { useContext, useEffect, useState } from 'react'
import StadisticContext from '../context/StadisticContext'

const InputWriter = () => {
  const [text, setText] = useState('')
  const [stadistic, setStadistic] = useState({})
  const { updateStadistic } = useContext(StadisticContext)

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    const analyzeText = (text) => {
      const stats = {
        vowels: 0,
        consonants: 0,
        numbers: 0,
        spaces: 0,
        uppercase: 0,
        lowercase: 0,
        words: 0,
        letters: 0,
        specialCharacters: 0,
        punctuation: 0,
        letterFrequency: {},
        numberFrequency: {},
        alphabetFrequency: {},
        specialCharacterFrequency: {},
        punctuationFrequency: {},
      }

      for (const char of text) {
        if (/[aeiouáéíóúü]/i.test(char)) stats.vowels++
        else if (/[bcdfghjklmnpqrstvwxyzñ]/i.test(char)) stats.consonants++

        if (/\d/.test(char)) {
          stats.numbers++
          stats.numberFrequency[char] = (stats.numberFrequency[char] || 0) + 1
        } else if (/\s/.test(char)) stats.spaces++

        if (/[A-ZÁÉÍÓÚÜÑ]/.test(char)) stats.uppercase++
        if (/[a-záéíóúüñ]/.test(char)) stats.lowercase++

        if (/[a-záéíóúüñ]/i.test(char)) {
          stats.letters++
          stats.letterFrequency[char] = (stats.letterFrequency[char] || 0) + 1
        }

        // BUG: Not working xd
        if (/[^a-zA-Z0-9\s.,;:!?(){}[\]@#$%^&%*\-_+=<>/|\\~`¦]/.test(char)) {
          stats.specialCharacters++
          stats.specialCharacterFrequency[char] = (stats.specialCharacterFrequency[char] || 0) + 1
        }

        if (/[.,;:!?(){}[\]]/.test(char)) {
          stats.punctuation++
          stats.punctuationFrequency[char] = (stats.punctuationFrequency[char] || 0) + 1
        }
      }

      for (const char of 'abcdefghijklmnopqrstuvwxyzáéíóúüñ') {
        const regex = new RegExp(char, 'gi')
        const count = (text.match(regex) || []).length
        if (count > 0) {
          stats.alphabetFrequency[char] = count
        }
      }

      const words = text.match(/\b[\wáéíóúüñ]+\b/gi)
      stats.words = words ? words.length : 0

      setStadistic(stats)
    }

    analyzeText(text)
  }, [text])

  useEffect(() => {
    updateStadistic(stadistic)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stadistic])

  return (
    <div className='flex flex-col-reverse mx-auto max-w-7xl px-6 lg:px-8'>
      <input
        type='text'
        onChange={(e) => handleChangeText(e)}
        placeholder='Había una vez un perro peruano ...'
        className='peer outline-none ring-0 px-4 py-1 h-12 border-1 border-gray-200
           rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-400
           duration-500 relative placeholder:duration-500
           placeholder:absolute focus:placeholder:pt-10 text-xl
           shadow-xl shadow-base-400/10 focus:shadow-none focus:rounded-md
           placeholder:text-base-500'
      />
      <span
        className='duration-500 opacity-0 mb-2 peer-focus:opacity-100
        text-base-500 text-sm -translate-y-12 peer-focus:translate-y-0'
      >Escribe :)
      </span
          >
    </div>
  )
}

export default InputWriter
