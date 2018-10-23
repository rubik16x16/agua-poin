import { PromocionesModule } from './promociones.module';

describe('PromocionesModule', () => {
  let promocionesModule: PromocionesModule;

  beforeEach(() => {
    promocionesModule = new PromocionesModule();
  });

  it('should create an instance', () => {
    expect(promocionesModule).toBeTruthy();
  });
});
