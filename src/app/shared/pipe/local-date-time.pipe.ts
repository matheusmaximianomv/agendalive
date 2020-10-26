import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    const dateFormated = format(new Date(date), "dd/MM/yyyy' - 'HH:mm", {
      locale: ptBR
    });
    return dateFormated;
  }

}
