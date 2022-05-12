type User = { 
    name: string;
    lastName: string;
    birthDay: string;
    age?: number;
}

const brenno: User = {
    name: 'Brenno',
    lastName: 'Miranda',
    birthDay: '10/05',
    age: 20
}

//Union types

type LogLevel = 'info' | 'error' | 'debug'

function logMessage(message: string, level: LogLevel){
    console.log('[${level}] - ${message}')
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')

//intersection Types

type about = {
    bio: string;
    interests: string[]
}

type Profile = User & about;
const userWithProfile: Profile = {
    name: 'brenno',
    lastName: 'miranda',
    birthDay: '10/05',
    bio: 'Olá, me chamo Brenno',
    interests: ['rap', 'C']
}

type ComposedProfile = User &{
    log: LogLevel;
}