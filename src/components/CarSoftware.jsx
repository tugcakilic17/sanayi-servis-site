import { useState } from 'react';
import { Gauge, Zap, Cpu, Fuel } from 'lucide-react';
import aracYazilimBg from '../assets/arac_yazilim.jpg';
import './CarSoftware.css';

const CarSoftware = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  const [activeStage, setActiveStage] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const carData = {
    'Volkswagen': {
      models: {
        'Golf': {
          years: ['2018-2024', '2013-2017', '2008-2012'],
          engines: {
            '2018-2024': ['1.5 TSI 150hp', '2.0 TSI 245hp', '2.0 TDI 150hp'],
            '2013-2017': ['1.4 TSI 125hp', '2.0 TSI 220hp', '2.0 TDI 150hp'],
            '2008-2012': ['1.4 TSI 122hp', '2.0 TSI 200hp', '1.9 TDI 105hp']
          }
        },
        'Passat': {
          years: ['2019-2024', '2014-2018', '2010-2014'],
          engines: {
            '2019-2024': ['1.5 TSI 150hp', '2.0 TSI 190hp', '2.0 TDI 150hp'],
            '2014-2018': ['1.4 TSI 150hp', '2.0 TSI 220hp', '2.0 TDI 150hp'],
            '2010-2014': ['1.4 TSI 122hp', '2.0 TSI 210hp', '2.0 TDI 140hp']
          }
        }
      }
    },
    'BMW': {
      models: {
        '3 Serisi': {
          years: ['2019-2024', '2012-2018', '2005-2011'],
          engines: {
            '2019-2024': ['320i 184hp', '330i 258hp', '320d 190hp'],
            '2012-2018': ['320i 184hp', '328i 245hp', '320d 184hp'],
            '2005-2011': ['320i 150hp', '325i 218hp', '320d 163hp']
          }
        },
        '5 Serisi': {
          years: ['2017-2024', '2010-2016', '2003-2009'],
          engines: {
            '2017-2024': ['520i 184hp', '530i 252hp', '520d 190hp'],
            '2010-2016': ['520i 184hp', '528i 245hp', '520d 184hp'],
            '2003-2009': ['520i 170hp', '525i 218hp', '520d 163hp']
          }
        }
      }
    },
    'Mercedes': {
      models: {
        'C Serisi': {
          years: ['2021-2024', '2014-2020', '2007-2013'],
          engines: {
            '2021-2024': ['C180 170hp', 'C200 204hp', 'C220d 200hp'],
            '2014-2020': ['C180 156hp', 'C200 184hp', 'C220d 170hp'],
            '2007-2013': ['C180 156hp', 'C200 184hp', 'C220d 170hp']
          }
        },
        'E Serisi': {
          years: ['2016-2024', '2009-2015', '2002-2008'],
          engines: {
            '2016-2024': ['E200 197hp', 'E300 258hp', 'E220d 194hp'],
            '2009-2015': ['E200 184hp', 'E250 211hp', 'E220d 170hp'],
            '2002-2008': ['E200 163hp', 'E240 177hp', 'E220d 150hp']
          }
        }
      }
    },
    'Audi': {
      models: {
        'A3': {
          years: ['2020-2024', '2013-2019', '2008-2012'],
          engines: {
            '2020-2024': ['35 TFSI 150hp', '40 TFSI 190hp', '35 TDI 150hp'],
            '2013-2019': ['1.4 TFSI 125hp', '2.0 TFSI 190hp', '2.0 TDI 150hp'],
            '2008-2012': ['1.4 TFSI 125hp', '2.0 TFSI 200hp', '2.0 TDI 140hp']
          }
        },
        'A4': {
          years: ['2019-2024', '2015-2018', '2008-2014'],
          engines: {
            '2019-2024': ['35 TFSI 150hp', '45 TFSI 245hp', '35 TDI 163hp'],
            '2015-2018': ['1.4 TFSI 150hp', '2.0 TFSI 252hp', '2.0 TDI 150hp'],
            '2008-2014': ['1.8 TFSI 160hp', '2.0 TFSI 211hp', '2.0 TDI 143hp']
          }
        }
      }
    }
  };

  const tuningData = {
    stage1: {
      hpIncrease: 35,
      hpPercent: 23,
      torqueIncrease: 60,
      torquePercent: 20
    },
    stage2: {
      hpIncrease: 55,
      hpPercent: 37,
      torqueIncrease: 90,
      torquePercent: 30
    }
  };

  const getBaseSpecs = () => {
    if (!selectedEngine) return { hp: 150, torque: 250 };
    const hpMatch = selectedEngine.match(/(\d+)hp/);
    const baseHp = hpMatch ? parseInt(hpMatch[1]) : 150;
    return {
      hp: baseHp,
      torque: Math.round(baseHp * 1.8)
    };
  };

  const handleSearch = () => {
    if (selectedBrand && selectedModel && selectedYear && selectedEngine) {
      setShowResults(true);
    }
  };

  const baseSpecs = getBaseSpecs();
  const currentTuning = activeStage === 1 ? tuningData.stage1 : tuningData.stage2;
  const tunedHp = baseSpecs.hp + currentTuning.hpIncrease;
  const tunedTorque = baseSpecs.torque + currentTuning.torqueIncrease;

  return (
    <section 
      id="yazilim" 
      className="car-software"
      style={{ backgroundImage: `url(${aracYazilimBg})` }}
    >
      <div className="software-bg-overlay"></div>
      <div className="container">
        <h2 className="software-title">
          Tüm ayar dosyaları özelliklerimizi çevrimiçi olarak görüntüleyebilirsiniz.
        </h2>
        
        <div className="software-selectors">
          <div className="selector-group">
            <select 
              value={selectedBrand} 
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setSelectedModel('');
                setSelectedYear('');
                setSelectedEngine('');
                setShowResults(false);
              }}
            >
              <option value="">Araç Markasını Seçin</option>
              {Object.keys(carData).map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          
          <div className="selector-group">
            <select 
              value={selectedModel} 
              onChange={(e) => {
                setSelectedModel(e.target.value);
                setSelectedYear('');
                setSelectedEngine('');
                setShowResults(false);
              }}
              disabled={!selectedBrand}
            >
              <option value="">Önce Modelinizi Seçin</option>
              {selectedBrand && Object.keys(carData[selectedBrand].models).map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          
          <div className="selector-group">
            <select 
              value={selectedYear} 
              onChange={(e) => {
                setSelectedYear(e.target.value);
                setSelectedEngine('');
                setShowResults(false);
              }}
              disabled={!selectedModel}
            >
              <option value="">Önce Yılını Seçin</option>
              {selectedBrand && selectedModel && 
                carData[selectedBrand].models[selectedModel].years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))
              }
            </select>
          </div>
          
          <div className="selector-group">
            <select 
              value={selectedEngine} 
              onChange={(e) => {
                setSelectedEngine(e.target.value);
                setShowResults(false);
              }}
              disabled={!selectedYear}
            >
              <option value="">Önce Motorunu Seçin</option>
              {selectedBrand && selectedModel && selectedYear &&
                carData[selectedBrand].models[selectedModel].engines[selectedYear]?.map(engine => (
                  <option key={engine} value={engine}>{engine}</option>
                ))
              }
            </select>
          </div>
          
          <button 
            className="search-btn"
            onClick={handleSearch}
            disabled={!selectedEngine}
          >
            Arama
          </button>
        </div>

        {showResults && (
          <div className="software-results">
            <div className="results-header">
              <div className="car-info">
                <div className="brand-logo">
                  <span>{selectedBrand.charAt(0)}</span>
                </div>
                <div className="car-details">
                  <h3>{selectedBrand}</h3>
                  <p>{selectedModel} {selectedEngine}</p>
                </div>
              </div>
              
              <div className="stage-selector">
                <span>Stage türünü seç</span>
                <div className="stage-buttons">
                  <button 
                    className={`stage-btn ${activeStage === 1 ? 'active' : ''}`}
                    onClick={() => setActiveStage(1)}
                  >
                    Stage 1
                  </button>
                  <button 
                    className={`stage-btn ${activeStage === 2 ? 'active' : ''}`}
                    onClick={() => setActiveStage(2)}
                  >
                    Stage 2
                  </button>
                </div>
              </div>
              
              <div className="car-image">
                <img 
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80" 
                  alt="Araç"
                />
              </div>
            </div>
            
            <div className="results-content">
              <div className="specs-table">
                <div className="spec-row header-row">
                  <div className="spec-label"></div>
                  <div className="spec-value">Standart</div>
                  <div className="spec-value highlight">Yükseltilmiş</div>
                  <div className="spec-value result">Fark</div>
                </div>
                
                <div className="spec-row">
                  <div className="spec-label">
                    <Gauge size={18} />
                    <span>Güç hp</span>
                  </div>
                  <div className="spec-value">{baseSpecs.hp} <small>HP</small></div>
                  <div className="spec-value highlight">{tunedHp} <small>HP</small></div>
                  <div className="spec-value result increase">
                    {currentTuning.hpIncrease} <small>+%{currentTuning.hpPercent}</small>
                  </div>
                </div>
                
                <div className="spec-row">
                  <div className="spec-label">
                    <Zap size={18} />
                    <span>Moment / Çekiş Gücü</span>
                  </div>
                  <div className="spec-value">{baseSpecs.torque} <small>Nm</small></div>
                  <div className="spec-value highlight">{tunedTorque} <small>Nm</small></div>
                  <div className="spec-value result increase">
                    {currentTuning.torqueIncrease} <small>+%{currentTuning.torquePercent}</small>
                  </div>
                </div>
                
                <div className="spec-row">
                  <div className="spec-label">
                    <Cpu size={18} />
                    <span>ECU</span>
                  </div>
                  <div className="spec-value full">Bosch EDC17C46</div>
                </div>
                
                <div className="spec-row">
                  <div className="spec-label">
                    <Fuel size={18} />
                    <span>Yakıt Türü</span>
                  </div>
                  <div className="spec-value full">
                    {selectedEngine.toLowerCase().includes('tdi') || selectedEngine.toLowerCase().includes('d ') 
                      ? 'Turbo-Diesel' 
                      : 'Turbo-Benzin'}
                  </div>
                </div>
              </div>
              
              <div className="chart-section">
                <div className="chart-header">
                  <div className="chart-legend">
                    <span className="legend-hp">Güç hp</span>
                    <span className="legend-torque">Tork / Çekiş gücü Nm</span>
                  </div>
                </div>
                <div className="chart-bars">
                  <div className="bar-group">
                    <div className="bar-label">{tunedHp}HP</div>
                    <div className="bar hp-bar tuned" style={{height: `${(tunedHp / 300) * 100}%`}}></div>
                    <div className="bar hp-bar standard" style={{height: `${(baseSpecs.hp / 300) * 100}%`}}></div>
                    <div className="bar-label bottom">{baseSpecs.hp}HP</div>
                    <div className="bar-footer">
                      <span>Standart</span>
                      <span>Stage {activeStage}</span>
                    </div>
                  </div>
                  <div className="bar-group">
                    <div className="bar-label">{tunedTorque}nm</div>
                    <div className="bar torque-bar tuned" style={{height: `${(tunedTorque / 400) * 100}%`}}></div>
                    <div className="bar torque-bar standard" style={{height: `${(baseSpecs.torque / 400) * 100}%`}}></div>
                    <div className="bar-label bottom">{baseSpecs.torque}nm</div>
                    <div className="bar-footer">
                      <span>Standart</span>
                      <span>Stage {activeStage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarSoftware;
