import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    // Set -> parecido com array mas não aceita valores duplicados
    // Map -> estrutura parecida com objetos no js pela chave e valor, mas tem métodos diferentes que um objeto 

    list(search) {
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]
                
                return {
                    id,
                    ...data
                }
        })
        .filter(video => {
            if (search) {
                return video.title.includes(search)
            }

            return true
        })
    }

    create(video) {
        // UUID -> Universally Unique Identifier
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}
