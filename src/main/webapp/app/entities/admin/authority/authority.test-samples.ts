import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7f4e0404-2718-4f53-b39f-bfadec6bbb3a',
};

export const sampleWithPartialData: IAuthority = {
  name: '86ca32d7-9227-4d3c-a570-133a4ad6c0af',
};

export const sampleWithFullData: IAuthority = {
  name: '61071352-70d2-4465-ad8b-33144fb06f60',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
