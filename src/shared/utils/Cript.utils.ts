import * as crypto from 'crypto'

const crypt = (value: string) =>{
    const pass = crypto
    .createHash('sha256')
    .update(value)
    .digest('hex')

    return pass;
}

export default crypt;