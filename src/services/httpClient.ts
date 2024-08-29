import iziToast from "izitoast";

const BASE_URL = 'https://portfolio-lovat-phi-11.vercel.app/';

export function getData<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then(response => {
    if (!response.ok) {
    iziToast.error({
      title: 'Error',
      message: 'Can\'t load projects at the moment',
      position: 'topRight',
    });
      console.log('Cant load projects')
    }

    return response.json();
  });
}