import { InMemoryDbService } from 'angular-in-memory-web-api';
export class AppInMemoryApi implements InMemoryDbService {
    createDb() {
        return {
            'errorsss': [
                {
                    'Id': 1,
                    'Message': 'Error from API load',
                    'Type': 'APIError'
                },
                {
                    'Id': 2,
                    'Message': 'Error in HTML',
                    'Type': 'HTMLError'
                },
                {
                    'Id': 3,
                    'Message': 'Http Error Response Error',
                    'Type': 'HTTPErrorResponse'
                }
            ]
        }
    }
}