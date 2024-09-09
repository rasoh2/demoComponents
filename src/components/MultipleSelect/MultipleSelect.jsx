// La principal idea es que una persona pueda seleccionar su comuna.
// Para eso se deben lograr los siguientes requerimientos.

// - Mostrar 3 Select con Región, provincia y comuna respectivamente y un botón reset.
// - Los select parten deshabilitados excepto el de región.
// - Los select se irán deshabilitando a medida que se vaya seleccionando correctamente el anterior.
// - No se puede seleccionar comuna sin antes haber seleccionado provincia.
// - No se puede seleccionar provincia sin antes haber seleccionado región.
// - Si se encuentran los 3 select correctamente, el botón reset se podrá seleccionar y volverá a su estado inicial el componente.
// - El archivo con los datos se encuentra en src/assets/regiones-provincias-comunas.json
import { useState, useEffect } from "react";
import data from "../../assets/regiones-provincias-comunas.json";
export const MultipleSelect = () => {
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [communes, setCommunes] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");

  useEffect(() => {
    setRegions(data);
  }, []);
  const handleRegionChange = (e) => {
    const regionName = e.target.value;
    setSelectedRegion(regionName);

    // Encontrar provincias para la región seleccionada
    const region = data.find((r) => r.region === regionName);
    setProvinces(region ? region.provincias : []);
    setSelectedProvince("");
    setCommunes([]);
    setSelectedCommune("");
  };

  const handleProvinceChange = (e) => {
    const provinceName = e.target.value;
    setSelectedProvince(provinceName);

    const province = provinces.find((p) => p.name === provinceName);
    setCommunes(province ? province.comunas : []);
    setSelectedCommune("");
  };

  const handleCommuneChange = (e) => {
    setSelectedCommune(e.target.value);
  };
  const handleSubmit = () => {
    // Aquí puedes manejar el envío de datos
    console.log({
      selectedRegion,
      selectedProvince,
      selectedCommune,
    });

    // Reiniciar los selectores
    setSelectedRegion("");
    setSelectedProvince("");
    setSelectedCommune("");
    setProvinces([]);
    setCommunes([]);
  };

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Formulario con Tres Selectores</h2>
      <form>
        {/* Primer Selector */}
        <div className='mb-3'>
          <label htmlFor='regionSelector' className='form-label'>
            Region
          </label>
          <select
            id='regionSelector'
            className='form-select'
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value=''>Selecciona una región</option>
            {regions.map((region) => (
              <option key={region.region} value={region.region}>
                {region.region}
              </option>
            ))}
          </select>
        </div>

        {/* Segundo Selector */}
        <div className='mb-3'>
          <label htmlFor='provinceSelector' className='form-label'>
            Provincia
          </label>
          <select
            id='provinceSelector'
            className='form-select'
            value={selectedProvince}
            onChange={handleProvinceChange}
            disabled={!selectedRegion}
          >
            <option value=''>Selecciona una provincia</option>
            {provinces.map((province) => (
              <option key={province.name} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
        </div>
        {/* Tercer Selector */}
        <div className='mb-3'>
          <label htmlFor='communeSelector' className='form-label'>
            Comuna
          </label>
          <select
            id='communeSelector'
            className='form-select'
            value={selectedCommune}
            onChange={handleCommuneChange}
            disabled={!selectedProvince}
          >
            <option value=''>Selecciona una comuna</option>
            {communes.map((commune) => (
              <option key={commune.code} value={commune.code}>
                {commune.name}
              </option>
            ))}
          </select>
        </div>

        {/* Botón de Enviar */}
        <button
          type='button'
          className='btn btn-primary'
          onClick={handleSubmit}
          disabled={!selectedCommune}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
