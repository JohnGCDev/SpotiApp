import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBGdop5RGWjj616iM9hdq2Z7uU9KRh-JWmjxYMGIzdVzH8inxezCTLb0CrejynjSdY_a7UDQsGeF0-BDDQ',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?offset=0&limit=20').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&offset=0&limit=15`
    ).pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
