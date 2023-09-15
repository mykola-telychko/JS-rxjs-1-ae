console.clear();

import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  setTimeout(() => {
    observer.next('Data fetched');
  }, 1000);
});

const subscription = observable.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.error(error),
  complete: () => console.log('Complete'),
});

// To unsubscribe when done
subscription.unsubscribe();
