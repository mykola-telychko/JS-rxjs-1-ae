import { Observable } from 'rxjs';

const observable$ = new Observable((observer) => {
  setTimeout(() => {
    observer.next('Observable-data fetched');
  }, 2000);
});

const subscription = observable$.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.error(error),
  complete: () => console.log('Complete'),
});

// To unsubscribe when done
// subscription.unsubscribe();// ++ not work
